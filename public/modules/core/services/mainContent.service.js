'use strict';

angular.module('core')
  .service('homepageService', function () {
    this.getContent = function () {
      return ([
        {
          ad1: '//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetAdHtml&ID=OneJS&OneJS=1&banner_type=setandforget&campaigns=primeent&placement=assoc_banner_placement_default&region=US&marketplace=amazon&tracking_id=albslou-20&ad_type=banner&height=125&width=125&linkid=MVOWHECGSFDO3WY5&f=ifr',
          ad2: 'http://rcm-na.amazon-adsystem.com/e/cm?t=albslou-20&o=1&p=26&l=ur1&category=amazonhomepage&f=ifr',
          ad3: 'http://rcm-na.amazon-adsystem.com/e/cm?t=albslou-20&o=1&p=42&l=ur1&category=amazonhomepage&f=ifr',
          ad4: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=albslou-20&marketplace=amazon&region=US&placement=B004A29QF4&asins=B004A29QF4&linkId=&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066C0&bg_color=000000',
          ad5: '//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=albslou-20&marketplace=amazon&region=US&placement=B00BQ77PSG&asins=B00BQ77PSG&linkId=&show_border=false&link_opens_in_new_window=true&price_color=333333&title_color=0066C0&bg_color=000000',
          ad6: 'http://espn.go.com/bottomline/espnewsbottomlinebasic.html',
          ad7: '',
          ad8: '',
          ad9: '',
          ad10: '',
          ad11: ''
        }
      ]);
    };
});