import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { filter } from 'rxjs/operators';
import { Category } from '../../../models/category/category.model';
import { Product } from '../../../models/product/product.model';
import { ViewType } from '../../../models/types';
import * as fromStore from '../../store/categories';
import * as fromViewconf from '../../store/viewconf';


@Component({
  selector: 'ish-search-page-container',
  templateUrl: './search-page.container.html'
})

export class SearchPageContainerComponent implements OnInit {

  viewType: ViewType = 'list'
  products: Product[] = [
{
  "name": "Canon LEGRIA HF R16",
  "type": "Product",
  "attributes": [
    {
      "name": "Battery type",
      "type": "String",
      "value": "BP-2L5"
    },
    {
      "name": "Sensor type",
      "type": "String",
      "value": "CMOS"
    },
    {
      "name": "Focal length",
      "type": "String",
      "value": "3 - 60 mm"
    },
    {
      "name": "Minimum illumination",
      "type": "String",
      "value": "0.4 lx"
    },
    {
      "name": "Optical zoom",
      "type": "String",
      "value": "20 x"
    },
    {
      "name": "Focal length (35mm film equivalent)",
      "type": "String",
      "value": "40 - 800 mm"
    },
    {
      "name": "Image formats supported",
      "type": "String",
      "value": "1920 x 1080, 1600 x 1200, 640 x 480"
    },
    {
      "name": "Self-timer",
      "type": "String",
      "value": "10 s"
    },
    {
      "name": "Shooting modes",
      "type": "String",
      "value": "FXP, XP+, SP, LP"
    },
    {
      "name": "Camera shutter speed",
      "type": "String",
      "value": "1/2 - 1/20000 s"
    },
    {
      "name": "Maximum video resolution",
      "type": "String",
      "value": "1920 x 1080 pixels"
    },
    {
      "name": "Depth",
      "type": "ResourceAttribute",
      "value": {
        "type": "Quantity",
        "value": 124,
        "unit": "mm"
      }
    },
    {
      "name": "Battery technology",
      "type": "String",
      "value": "Lithium-Ion"
    },
    {
      "name": "S-Video out",
      "type": "String",
      "value": "0"
    },
    {
      "name": "S-Video in",
      "type": "String",
      "value": "0"
    },
    {
      "name": "Manual focus",
      "type": "String",
      "value": "Y"
    },
    {
      "name": "USB 2.0 ports quantity",
      "type": "String",
      "value": "1"
    },
    {
      "name": "Compatible memory cards",
      "type": "String",
      "value": "SD / SDHC"
    },
    {
      "name": "Height",
      "type": "ResourceAttribute",
      "value": {
        "type": "Quantity",
        "value": 64,
        "unit": "mm"
      }
    },
    {
      "name": "Digital zoom",
      "type": "String",
      "value": "400 x"
    },
    {
      "name": "Width",
      "type": "ResourceAttribute",
      "value": {
        "type": "Quantity",
        "value": 60,
        "unit": "mm"
      }
    },
    {
      "name": "Effective megapixels (movie)",
      "type": "String",
      "value": "1.56 MP"
    },
    {
      "name": "Battery life (max)",
      "type": "String",
      "value": "3 h"
    },
    {
      "name": "Sports",
      "type": "String",
      "value": "Y"
    },
    {
      "name": "Microphone, line-in jack",
      "type": "String",
      "value": "N"
    },
    {
      "name": "Audio dubbing",
      "type": "String",
      "value": "N"
    },
    {
      "name": "Spotlight",
      "type": "String",
      "value": "Y"
    },
    {
      "name": "Source data-sheet",
      "type": "String",
      "value": "Icecat.biz"
    },
    {
      "name": "Display diagonal",
      "type": "String",
      "value": "68.6 mm (2.7 \")"
    },
    {
      "name": "Weight",
      "type": "ResourceAttribute",
      "value": {
        "type": "Quantity",
        "value": 270,
        "unit": "g"
      }
    },
    {
      "name": "Built-in flash",
      "type": "String",
      "value": "N"
    },
    {
      "name": "DV port",
      "type": "String",
      "value": "N"
    },
    {
      "name": "HDMI ports quantity",
      "type": "String",
      "value": "1"
    },
    {
      "name": "Night mode",
      "type": "String",
      "value": "Y"
    },
    {
      "name": "Component video (YPbPr/YCbCr) out",
      "type": "String",
      "value": "1"
    },
    {
      "name": "Audio system",
      "type": "String",
      "value": "Dolby Digital"
    },
    {
      "name": "Optical sensor size",
      "type": "String",
      "value": "1/0.217 mm (1/5.5 \")"
    },
    {
      "name": "Auto focus",
      "type": "String",
      "value": "Y"
    },
    {
      "name": "Flash memory",
      "type": "String",
      "value": "8 GB"
    },
    {
      "name": "Focus",
      "type": "String",
      "value": "TTL"
    },
    {
      "name": "Audio output",
      "type": "String",
      "value": "1"
    },
    {
      "name": "Interface",
      "type": "String",
      "value": "USB 2.0"
    },
    {
      "name": "Total megapixels",
      "type": "String",
      "value": "2.39 MP"
    },
    {
      "name": "Colour_of_product",
      "type": "String",
      "value": "Red"
    },
    {
      "name": "Camcorder tape type",
      "type": "String",
      "value": "Flash memory"
    },
    {
      "name": "Display",
      "type": "String",
      "value": "LCD"
    },
    {
      "name": "Image stabilizer",
      "type": "String",
      "value": "Y"
    }
  ],
  "sku": "3953312",
  "productName": "Canon LEGRIA HF R16",
  "shortDescription": "LEGRIA HF R16 - 8GB, SDHC, 1/ 13.97 cm (5.5 \") CMOS, 20x opt., dig. 400x",
  "longDescription": "Get into HD moviemaking with the LEGRIA HF R16. Lightweight, stylish and undeniably chic, it offers 8GB internal memory and memory card recording – all you need to make your own Full HD masterpiece.<br/>- 8GB Dual Flash Memory<br/>- Smart Auto<br/>- Video Snapshot<br/>- 20x optical zoom lens Dynamic IS<br/>- HD-SD conversion in-camera<br/>- Canon HD Camera System<br/>- Family friendly: Face Detection and Instant AF<br/>- Pre REC<br/>- Relay Recording<br/>- Compatible with standalone DW-100 DVD burner<br/><br/><B>Dual Flash Memory</b><br/>With 8GB of Dual Flash Memory, the LEGRIA HF R16 offers both internal capacity and memory card shooting. Store over 3 hours of movies to built-in memory – or record to SD and SDHC cards, which are great for sharing.<br/><br/><B>Smart Auto with Scene Detection Technology</b><br/>For effortless point-and-shoot operation, the camcorder selects the most appropriate scene mode - from a choice of 31 - to automatically obtain perfect settings. Smart Auto mode uses intelligent Scene Detection Technology to select a scene mode based on brightness, contrast, distance and overall hue<br/><br/><B>Video Snapshot</b><br/>Video Snapshot mode makes it easy to create your own short movies. Every time the Record button is pressed a short movie clip is captured – choose from two, four or eight seconds length. To make a movie, simply arrange your clips in a playlist on the memory card, select a soundtrack, and you’re instantly ready to play your movie on a TV – no need for editing on a PC.<br/><br/><B>Steady shots throughout the range</b><br/>The LEGRIA HF R16 features a genuine Canon HD Video Lens with 20x optical zoom to get you closer to the action. The Dynamic Electronic Image Stabilizer helps achieve steady shots, even when moving.<br/><br/><B>HD to SD conversion</b><br/>In-camera HD to SD conversion makes sharing movies easier. By reducing the size of your movies to web-friendly Standard Definition you can upload your movies faster.<br/><br/><B>Canon HD Camera System</b><br/>Capture stunning images via the Canon HD Camera System: the LEGRIA HF R16 uses a unique combination of HD CMOS sensor, a Canon HD Video Lens with 20x optical zoom, and the DIGIC DV III processor.<br/><br/><B>Pre REC</b><br/>In Pre REC mode, the camcorder starts recording three seconds before the Record button is pressed. These three seconds are automatically added to the beginning of each clip, so you can still capture the crucial moment even if you pressed the Record button too late.<br/><br/><B>Family friendly shooting</b><br/>The LEGRIA HF R16 is perfect for capturing those special moments. Instant AF achieves pin-sharp focus quickly and Face Detection Technology optimises shooting settings for perfect people shots – tracking up to 35 faces in a frame.<br/><br/><B>Continuous shooting with Relay recording</b><br/>If the built-in memory becomes full during shooting, Relay recording automatically switches to continue recording on an SDHC card – so you won’t miss a thing.",
  "availability": true,
  "retailSet": false,
  "inStock": true,
  "productMaster": false,
  "mastered": false,
  "roundedAverageRating": "0.0",
  "readyForShipmentMin": 3,
  "readyForShipmentMax": 7,
  "minOrderQuantity": 1,
  "productBundle": false,
  "manufacturer": "Canon",
  "listPrice": {
    "type": "ProductPrice",
    "value": 337.35,
    "currencyMnemonic": "USD"
  },
  "salePrice": {
    "type": "ProductPrice",
    "value": 303.62,
    "currencyMnemonic": "USD"
  },
  "shippingMethods": [
    {
      "name": "5-Business Day",
      "type": "ShippingMethod",
      "id": "STD_5DAY",
      "shippingTimeMin": 2,
      "shippingTimeMax": 5
    },
    {
      "name": "Saturday Delivery",
      "type": "ShippingMethod",
      "id": "SATURDAY",
      "shippingTimeMin": 0,
      "shippingTimeMax": 6
    },
    {
      "name": "2-Business Day",
      "type": "ShippingMethod",
      "id": "STD_2DAY",
      "shippingTimeMin": 1,
      "shippingTimeMax": 2
    },
    {
      "name": "Standard Ground",
      "type": "ShippingMethod",
      "id": "STD_GROUND",
      "shippingTimeMin": 3,
      "shippingTimeMax": 7
    }
  ],
  "availableGiftWraps": [
    {
      "type": "Link",
      "uri": "inSPIRED-inTRONICS-Site/-/products/GiftWrapPinkFlowers",
      "title": "Gift Wrap Pink Flowers",
      "description": "Gift Wrap with a beautiful pink floral pattern"
    },
    {
      "type": "Link",
      "uri": "inSPIRED-inTRONICS-Site/-/products/GiftWrapNature",
      "title": "Gift Wrap Nature",
      "description": "Wrapping paper with ornamental pattern."
    },
    {
      "type": "Link",
      "uri": "inSPIRED-inTRONICS-Site/-/products/GiftWrapPhantasy",
      "title": "Gift Wrap Phantasy",
      "description": "Gift Wrap with phantasy pattern."
    }
  ],
  "availableGiftMessages": [
    {
      "type": "Link",
      "uri": "inSPIRED-inTRONICS-Site/-/products/GiftMessagePink",
      "title": "Gift Message Pink",
      "description": "A gift message card."
    },
    {
      "type": "Link",
      "uri": "inSPIRED-inTRONICS-Site/-/products/GiftMessageBlue",
      "title": "Gift Message Blue",
      "description": "A blue gift card message."
    },
    {
      "type": "Link",
      "uri": "inSPIRED-inTRONICS-Site/-/products/GiftMessageGreen",
      "title": "Gift Message Green",
      "description": "A green message card."
    }
  ],
  "images": [
    {
      "name": "side S",
      "type": "Image",
      "effectiveUrl": "/assets/product_img/a.jpg",
      "viewID": "side",
      "typeID": "S",
      "imageActualHeight": 110,
      "imageActualWidth": 110,
      "primaryImage": false
    },
    {
      "name": "back S",
      "type": "Image",
      "effectiveUrl": "/assets/product_img/a.jpg",
      "viewID": "back",
      "typeID": "S",
      "imageActualHeight": 110,
      "imageActualWidth": 110,
      "primaryImage": false
    },
    {
      "name": "front S",
      "type": "Image",
      "effectiveUrl": "/assets/product_img/a.jpg",
      "viewID": "front",
      "typeID": "S",
      "imageActualHeight": 110,
      "imageActualWidth": 110,
      "primaryImage": true
    },
    {
      "name": "side L",
      "type": "Image",
      "effectiveUrl": "/assets/product_img/a.jpg",
      "viewID": "side",
      "typeID": "L",
      "imageActualHeight": 500,
      "imageActualWidth": 500,
      "primaryImage": false
    },
    {
      "name": "back L",
      "type": "Image",
      "effectiveUrl": "/assets/product_img/a.jpg",
      "viewID": "back",
      "typeID": "L",
      "imageActualHeight": 500,
      "imageActualWidth": 500,
      "primaryImage": false
    },
    {
      "name": "front L",
      "type": "Image",
      "effectiveUrl": "/assets/product_img/a.jpg",
      "viewID": "front",
      "typeID": "L",
      "imageActualHeight": 500,
      "imageActualWidth": 500,
      "primaryImage": true
    },
    {
      "name": "side M",
      "type": "Image",
      "effectiveUrl": "/assets/product_img/a.jpg",
      "viewID": "side",
      "typeID": "M",
      "imageActualHeight": 270,
      "imageActualWidth": 270,
      "primaryImage": false
    },
    {
      "name": "back M",
      "type": "Image",
      "effectiveUrl": "/assets/product_img/a.jpg",
      "viewID": "back",
      "typeID": "M",
      "imageActualHeight": 270,
      "imageActualWidth": 270,
      "primaryImage": false
    },
    {
      "name": "front M",
      "type": "Image",
      "effectiveUrl": "/assets/product_img/a.jpg",
      "viewID": "front",
      "typeID": "M",
      "imageActualHeight": 270,
      "imageActualWidth": 270,
      "primaryImage": true
    }
  ]
} as any
  ]

  constructor(
    private store: Store<fromStore.ShoppingState>
  ) { }

  ngOnInit() {
  }
}
