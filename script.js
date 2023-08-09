
function flatten(objectToFlatten) {
    // This will not be used in the logic of the page - but it will be helpful to put this page together
    function flattenObject(obj) {
      const accumulator = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] == 'object' && obj[key] != null) {
            const flatObject = flattenObject(obj[key]);
            for (let x in flatObject) {
              if (flatObject.hasOwnProperty(x)) {
                accumulator[key + '.' + x] = flatObject[x];
              }
            }
          } else {
            accumulator[key] = obj[key];
          }
        }
      }
      return accumulator;
    }
    return flattenObject(objectToFlatten);
  }


//   function inflateObject() {
//     const EVENT_TYPE = eventType.toUpperCase();
//     const tmp = flatten(everything[EVENT_TYPE]);
//     const seen = {};
//     for (let k in tmp) {
//       if (k.includes('zodValidationFn')) {
//         // ignore it
//       } else {
//         seen[k] = tmp[k];
//       }
//     }
//     return seen;
//   }


const tiny_information = {
    "payload": {
        "properties": {
            "timestamp": 1691522180998,
            "headerUnified": "home"
        },
        "anonymousId": "296bbcb1-17ca-4e29-a05b-173364be9381"
    }
}
const information = {
    "payload": {
        "type": "trackEnd",
        "event": "page-view",
        "properties": {
            "eventCategoryName": "page-view",
            "urlRoute": "http://localhost:3000/",
            "path": "/",
            "anonymousId": "",
            "language": "en_CA",
            "browserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
            "timestamp": 1691522180998,
            "property": "web-CA",
            "country": "CA",
            "headerUnified": "home",
            "pathMutatorObject": {},
            "validationResult": {
                "success": true,
                "data": {
                    "version": {
                        "team": "",
                        "lam": "",
                        "component": ""
                    },
                    "timestamp": 1691519743999,
                    "payload": {
                        "collectionList": [
                            {
                                "productList": [
                                    {
                                        "skuList": [
                                            {
                                                "attributes": {
                                                    "errorGuestFacing": false,
                                                    "errorDetails": "",
                                                    "errorType": "",
                                                    "errorMessage": "",
                                                    "orderId": ""
                                                },
                                                "price": {
                                                    "saleWithoutTaxShipping": "",
                                                    "regularWithoutTaxShipping": "",
                                                    "taxOnly": "",
                                                    "isSale": false,
                                                    "displaySale": "",
                                                    "displayRegular": ""
                                                },
                                                "quantity": -1,
                                                "size": "",
                                                "sku": ""
                                            }
                                        ],
                                        "price": {
                                            "saleWithoutTaxShipping": "",
                                            "regularWithoutTaxShipping": "",
                                            "taxOnly": "",
                                            "isSale": false,
                                            "displaySale": "",
                                            "displayRegular": ""
                                        },
                                        "name": {
                                            "unified": "",
                                            "localized": ""
                                        },
                                        "categoryUnifiedId": "",
                                        "unifiedId": "",
                                        "productId": ""
                                    }
                                ],
                                "name": {
                                    "unified": "",
                                    "localized": ""
                                },
                                "type": "",
                                "id": ""
                            }
                        ],
                        "user": {
                            "attributes": {
                                "appId": {
                                    "sfcc": {
                                        "id": ""
                                    },
                                    "atg": {
                                        "id": ""
                                    },
                                    "fusion": {
                                        "id": ""
                                    }
                                },
                                "vendors": {
                                    "google": {
                                        "googleClickId": ""
                                    },
                                    "facebook": {
                                        "eventId": "",
                                        "testEventCode": "",
                                        "fbp": "",
                                        "fbc": "",
                                        "fbClickId": ""
                                    }
                                },
                                "genderAffinity": "",
                                "campaignId": ""
                            },
                            "geoIp": {
                                "zip": "",
                                "city": "",
                                "state": "",
                                "country": "CA",
                                "ip": ""
                            },
                            "browserUserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
                            "profile": {
                                "membershipType": "unknown",
                                "isLoggedIn": false,
                                "hashedEmail": ""
                            },
                            "anonymousId": ""
                        },
                        "event": {
                            "component": {
                                "attributes": {
                                    "errorGuestFacing": false,
                                    "errorDetails": "",
                                    "errorType": "",
                                    "errorMessage": "",
                                    "orderId": ""
                                },
                                "internalCampaignId": {
                                    "workstreamSpecified": "",
                                    "workstreamBase": "",
                                    "type": "",
                                    "testVariation": "",
                                    "testName": "",
                                    "row": -1,
                                    "businessInitiative": "",
                                    "pageName": {
                                        "name": {
                                            "unified": "",
                                            "localized": ""
                                        }
                                    },
                                    "ctaPageName": {
                                        "name": {
                                            "unified": "",
                                            "localized": ""
                                        }
                                    }
                                },
                                "placement": {
                                    "totalCount": -1,
                                    "position": -1
                                },
                                "text": "",
                                "type": "",
                                "id": ""
                            },
                            "attributes": {
                                "errorGuestFacing": false,
                                "errorDetails": "",
                                "errorType": "",
                                "errorMessage": "",
                                "orderId": ""
                            },
                            "eventSubType": "",
                            "type": "page-view",
                            "id": "home"
                        },
                        "screen": {
                            "attributes": {},
                            "category": {
                                "gender": "",
                                "hierarchy": [
                                    {
                                        "name": {
                                            "unified": "",
                                            "localized": ""
                                        }
                                    }
                                ]
                            },
                            " ": {
                                "unified": "home",
                                "localized": ""
                            },
                            "language": "en_CA",
                            "property": "web-CA",
                            "currency": "",
                            "collections": [
                                ""
                            ],
                            "country": "CA",
                            "type": "",
                            "path": "/",
                            "urlRoute": "http://localhost:3000/"
                        }
                    }
                }
            }
        },
        "options": {},
        "userId": null,
        "anonymousId": "296bbcb1-17ca-4e29-a05b-173364be9381",
        "meta": {
            "rid": "8da0ccee-5187-43ff-811a-d44985846e8d",
            "ts": 1691519744001,
            "hasCallback": true
        }
    }
}