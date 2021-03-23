import { LightningElement, api, wire } from "lwc";
import getRelatedContacts from "@salesforce/apex/AccountController.getRelatedContacts";

export default class WireApexProperty extends LightningElement {
  @api recordId;

  // @wire(getRelatedContacts, { recordId: this.recordId })
  // contacts;

  // handleButtonClick() {
  //     getRelatedContacts({ //imperative Apex call
  //         recordId: this.recordId
  //     })
  //         .then(contacts => {
  //             //code to execute if related contacts are returned successfully
  //             console.log(contacts);
  //         })
  //         .catch(error => {
  //             //code to execute if related contacts are not returned successfully
  //             console.log(error);
  //         });
  // }

  connectedCallback() {
    let array = [];
    getRelatedContacts({
      //imperative Apex call
      recordId: this.recordId
    })
      .then((contacts) => {
        //code to execute if related contacts are returned successfully

        console.log(contacts[0].Id);
      })
      .catch((error) => {
        //code to execute if related contacts are not returned successfully
        console.log(error);
      });
  }
}
