export const jsonSeasonsData = [
  {
    name: "Seasons",
    months: [
      {
        name: "Summer",
        months: [
          {
            name: "June",
            days: 30,
            holydays: [
              7, 28
            ]
          },
          {
            name: "July",
            days: 31
          },
          {
            name: "August",
            days: 31,
            holydays: [
              24
            ]
          }
        ]
      },
      {
        name: "Fall",
        months: [
          {
            name: "September",
            days: 30
          },
          {
            name: "October",
            days: 31,
            holydays: [
              14
            ]
          },
          {
            name: "November",
            days: 30
          }
        ]
      },
      {
        name: "Winter",
        months: [
          {
            name: "December",
            days: 31,
            holydays: [
              25
            ] 
          },
          {
            name: "January",
            days: 31,
            holydays: [
              1,7
            ]
          },
          {
            name: "February",
            days: 28
          }
        ]
      },
      {
        name: "Spring",
        months: [
          {
            name: "March",
            days: 31,
            holydays: [
              7
            ]
          },
          {
            name: "April",
            days: 30,
            holydays: [
              19
            ]
          },
          {
            name: "May",
            days: 31,
            holydays: [
              1, 8
            ]
          }
        ]
      }
    ]
  }
];

export const jsonRandomData = {
  "amazon": [],
  "flipkart": {
    "product_store": "Flipkart",
    "product_store_logo": "logo url",
    "product_store_url": "shop url",
    "product_price": "14999",
    "product_offer": "",
    "product_color": "",
    "product_delivery": "3-4",
    "product_delivery_cost": "0",
    "is_emi": "1",
    "is_cod": "1",
    "return_time": "10 Days",
    "mocks": {
      "data": "Beyerdynamic 990"
    },
    "aux_data": [
      {
        "name": "December",
        "holydays": [
          25
        ]
      },
      {
        "name": "January",
        "holydays": [
          1, 2, 7
        ]
      },
      {
        "name": "February",
        "holydays": []
      }
    ]
  },
  "snapdeal": [
    {
      "title": "Sample Konfabulator Widget",
      "name": "main_window",
      "width": 500,
      "height": 500
    },
    {
      "title": "Sample Konfabulator Widget",
      "name": "main_window",
      "width": 500,
      "height": 500
    },
    { 
      "src": "Images/Sun.png",
      "name": "sun1",
      "hOffset": 250,
      "vOffset": 250,
      "alignment": "center"
    },
    {
      "data": "Click Here",
      "size": 36,
      "style": "bold",
      "name": "text1",
      "hOffset": 250,
      "vOffset": 100,
      "alignment": "center",
      "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
  ]
}