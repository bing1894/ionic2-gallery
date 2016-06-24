import {Page, NavController, NavParams, List, Item, Toast} from 'ionic-angular';
import {IonicGallery} from '../../../dist/ionic-gallery';


@Page({
  templateUrl: 'build/pages/gallery/gallery.html',
	directives: [IonicGallery]

})
export class GalleryPage {
  selectedItem: any;
  icons: string[];
  items: Array<any>;
	options: any;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

		this.options = {
			urlKey:'URL',
			thumbKey:'thumb',
			titleKey:'title',
			contentKey:'note',
			colWidth:120,
			thumbnailClickAction: this.thumbnailClick,
			actionClass:this,
			viewActionButtons:[{
				icon: 'download',
				action: this.save
			},
			{
				icon: 'heart',
				action: this.like
			},
		]
		}
    this.items = [];
    for(let i = 1; i < 20; i++) {
			let s = {
        title: 'Item ' + i,
        note: 'This is item #' + i,
				thumb: 'http://placehold.it/120X120',
				URL: `http://placehold.it/${i}00X300`,
      }
      this.items.push(s);
    }
  }
	save(item){
		console.log("in ListPage save()", item, this);
		this.presentToast(`item ${item.title} saved!`)
	}
	thumbnailClick(item){
		console.log("in ListPage thumbnailClick()", item, this);
		this.presentToast(`item ${item} clicked!`)
	}
	like(item){
		console.log("in ListPage like()", item, this);
		this.presentToast(`item ${item.title} liked!`)

	}
	presentToast(text) {
	  let toast = Toast.create({
	    message: text,
	    duration: 3000,
			position: 'bottom'
	  });

		console.log("presentToast()", this, this.nav, toast)
	  toast.onDismiss(() => {
	    console.log('Dismissed toast');
	  });

	  this.nav.present(toast);
  }

}
