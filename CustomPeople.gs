'use strict'

class CustomPeople {
    /**
      * 連絡先に関するコンストラクタ
      * @param {number} 連絡先から何件抽出するか 
      * @constructor
      */
    constructor(number) {
      /** @type {object} */
      this.connections = People.People.Connections.list('people/me', {
        pageSize: number,
        personFields: 'names,emailAddresses'
      }
      );

    }

    getJasonObj() {
      return JSON.parse(this.connections);
    }

    getTotalPeople() {
      return this.getJasonObj().totalPeople;
    }

    getTotalItems() {
      return this.getJasonObj().totalItems;
    }

    getnextPageToken() {
      return this.getJasonObj().nextPageToken;
    }

    geConnectionsArray() {
      return this.getJasonObj().connections;
    }

    getResourceName() {
      return this.geConnectionsArray().map(element => element.resourceName);
    }

    getNames() {
      return this.geConnectionsArray().map(element => element.names);
    }

    getDisplayNames() {
      return this.getNames().map(element => element[0].displayName);
    }

    getEtag() {
      return this.geConnectionsArray().map(element => element.etag);
    }

    getEmailAddresses() {
      return this.geConnectionsArray().map(element => element.emailAddresses);
    }

    getEmailAddressesValue() {
      return this.getEmailAddresses().map(element => element[0].value);
    }

  }

//   const cp = new CustomPeople(3); //何件分出力するか
//   console.log(cp.getDisplayNames()); //displayNameのみ
//   console.log(cp.getEmailAddressesValue()); //Emailアドレスのみ


