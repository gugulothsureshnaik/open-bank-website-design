import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  public cardMockData = Array();
  constructor() { }

  ngOnInit() {
    this.cardMockData = [
      {
        img_loc: 'assets/Get Paid Instantly.png',
        title: 'Quick cash disbursement',
        content: 'Get terms loans that your business needs within 72 hrs'
      },
      {
        img_loc: 'assets/freelancer_feature_icon_6@1.5x.png',
        title: "Ace your business finances",
        content: "Manage banking, accounting & everything in between, on one platform"
      },
      {
        img_loc: 'assets/Low interest rate.png',
        title: "Low-interest rate",
        content: "Achieve your financial goals with an amazing interest rate starting at 13% per annum"
      },
      {
        img_loc: 'assets/Covid.png',
        title: "Loans to fight COVID-19",
        content: "Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh"
      },
      {
        img_loc: 'assets/Secure Payments.png',
        title: "Zero Paperwork",
        content: "Get started instantly by submitting only your basic details & bank statements"
      }
    ];
  }

}
