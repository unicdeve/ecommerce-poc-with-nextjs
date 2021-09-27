import { IProduct } from '../contexts/state';

const products: { products: IProduct[] } = {
	products: [
		{
			id: 'Red Bench',
			name: 'Red Bench',
			category: 'people',
			price: 3.89,
			currency: 'USD',
			dimmentions: {
				width: 1020,
				height: 1020,
			},
			image: {
				src: 'https://s3-alpha-sig.figma.com/img/2e67/fa64/13284b98f11a3a99b332e1a5e5f7ac6a?Expires=1633910400&Signature=XciJHBp9WVgdrf~YgpA2x3LSPlJegn7XEveMKP7L1FeLxypr2PgkeABCkh0o0G588YBgl~15NjhptpS-QsXz5Gg~8ZdFpu~Z9WZTTSgt213pW5NoYbqZHrlN7TyizFIbnbzO0F1FO~ax8P0O73~HCE5dp7PEMGmNjVMLm0AU4I4e3PU4F6YOeycx4W~fA2ozgbl8KjDuK0sTZZY61UvtWFtsQzRy403U0ybUi4TOXfESHYEwrBg6aulUOiStf54wGeptgKhiHbsmj-z9zAvfaJuqGaL~EKM-gK98~GaG5H7viDGyQKpDIrIdWZhev-835YUvtHlazu3RCEhfEZZ~hw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
				alt: 'Red Bench',
			},
			isBestseller: true,
			featured: false,
			details: null,
		},
		{
			id: 'Egg Balloon',
			name: 'Egg Balloon',
			category: 'food',
			price: 93.89,
			currency: 'USD',
			dimmentions: {
				width: 1020,
				height: 1020,
			},
			image: {
				src: 'https://s3-alpha-sig.figma.com/img/1810/7320/8d67e79fbec0263b9ca56f0c69f4f64c?Expires=1633910400&Signature=bM4PvOMxYihUhVqBqk~rjP7HrivnNy5WBPd~Lx76okdV5jyi2KBLeAOZSt03lEHADeaf7GjBSoiMXEHVye5GchNihSW73sKdpqo2-AOT8S3CdzWPbJwU5mFjz~xnGIco8bZKihj8HWkeIl2Fj7o10HV330zIy75sHp6SQKae2vB07xErpru7tVosMXH79QwtOPv~AMKxX6NVc9TL~1ixB0FOOofruDTVnnBtfBDuhVGVl1xd5w85yo2oPH6~91Eom1F2qJtGhX-M-UIXzBCMKfKCkWPLYnZBXdTel1pde18-cVlin2~yO-oAzyxlW6jxC93Fb1KxuUWEeCNZYwpKSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
				alt: 'Egg Balloon',
			},
			isBestseller: false,
			featured: false,
			details: null,
		},
		{
			id: 'Man',
			name: 'Man',
			category: 'people',
			price: 100,
			currency: 'USD',
			dimmentions: {
				width: 1020,
				height: 1020,
			},
			image: {
				src: 'https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1223649.jpg&fm=jpg',
				alt: 'Man',
			},
			isBestseller: false,
			featured: false,
			details: null,
		},
		{
			id: 'Architecture',
			name: 'Architecture',
			category: 'landmarks',
			price: 101,
			currency: 'USD',
			dimmentions: {
				width: 1020,
				height: 1020,
			},
			image: {
				src: 'https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?cs=srgb&dl=pexels-oliver-sj%C3%B6str%C3%B6m-1223649.jpg&fm=jpg',
				alt: 'Architecture',
			},
			isBestseller: false,
			featured: false,
			details: null,
		},
		{
			id: 'Samurai King Restling',
			name: 'Samurai King Restling',
			category: 'landmarks',
			price: 101,
			currency: 'USD',
			image: {
				src: 'https://s3-alpha-sig.figma.com/img/d578/0646/bea3c9f2aa2b94f1724c9124e6c9956e?Expires=1633910400&Signature=Hq6B5IYU3Qsc0UQX7iJzJ7LPo7wV9e4gTi3bKM2mI03k4fg9Wk3ShmZPRT9XE5O-LFn8F0dAcj5dpvvZ5gg-DNWM7sRZTJoxAWkO9b9DaJcfAGzohicZGEUx8BPMROiHQskzKmoS1ji0idRlZfMw1mcIQiw9HtU1dlFtHDqWRsCzp9avXQ6BtM6~-Yy35HxFTvYM~L2DCCz8pkbPXJF7q3qD66oxwNv09RDMtPWSid~r9La8l87tcyjdk-HVZ9N1vIn5NbQ4v8PN76fU0IDr-gMQZ2VjYQvg6ngUOorXvCaaE4PbF9x7bQruuF2l25T5bmhrTGSufs4c2Mrq1zF08w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
				alt: 'Samurai King Restling',
			},
			dimmentions: {
				width: 1020,
				height: 1020,
			},
			isBestseller: false,
			featured: true,
			details: {
				dimmentions: {
					width: 1020,
					height: 1020,
				},
				size: 15000,
				description:
					'So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely',
				recommendations: [
					{
						src: 'https://s3-alpha-sig.figma.com/img/290e/abbe/1dbdf80f154ea4305f0d967d21a15c73?Expires=1633910400&Signature=Pvw~6DtycO6gtRsNRRAMHHE6EKthx5SBb2~J63HB7zaVk16pTA6uzCWF6szKg9355yE5vrm9zaaicVgObEZgUcYH~iFX-JfQC~7-PPE0~~W3yNyIIN0Usg~wUQkxyjA6SsD8fKZPqZQgDRkI7WfOCgAV~Da-XIOfxL73BLNCFmLEdh9-nfarFEwLRYETSu9CDkmsWx65w6aTK0NdzNtxe8OQTApXuYtPWP57FdwiVGUKX43uqq~7BcZfdZ44l1txOTTKWtHwGsx91XRSKbWPZT3HV4ZA50wpi56MWxLl~o--EmxFy0cIOPTbukmBvQVmO6UCCJR9ieFPrwXNfrkDVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
						alt: 'pexels image',
					},
					{
						src: 'https://s3-alpha-sig.figma.com/img/1fe1/9519/55ca15c8654e7c844e63c87602c6398a?Expires=1633910400&Signature=YUhP1BpRWm3AlHsl9DK6Dh7tjVsKV9aY6we6aI66zoCLyvTJmaTX97OydLFyzYD9Z6DNo7YOXUTgZT5hLbsqdnuSuC53nZWmZbyHRM059v62N4r-RWPq5G-BSZ-maxoQZ6mSBlzsngQxIz0h276vQAwuUE0qIsWcRt5GBed2hn2Y3uvdbxLSpz7XdHzpOPtJJzHuz7-SwlSZPmpL8KWgtSaTKd8-i~WlbKLjB1wUPOXPS8oLJqoiz4C5CJ6YuVQiXWwsbVAu5izVhPsm5r3HY24bvzh0T0DCPK6mmbys~4pGsV5shQ77KPVxIwNLW~PR9habI2GZLrmYh~WkiT359Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
						alt: 'Instanbul Turkey',
					},
					{
						src: 'https://s3-alpha-sig.figma.com/img/1810/7320/8d67e79fbec0263b9ca56f0c69f4f64c?Expires=1633910400&Signature=bM4PvOMxYihUhVqBqk~rjP7HrivnNy5WBPd~Lx76okdV5jyi2KBLeAOZSt03lEHADeaf7GjBSoiMXEHVye5GchNihSW73sKdpqo2-AOT8S3CdzWPbJwU5mFjz~xnGIco8bZKihj8HWkeIl2Fj7o10HV330zIy75sHp6SQKae2vB07xErpru7tVosMXH79QwtOPv~AMKxX6NVc9TL~1ixB0FOOofruDTVnnBtfBDuhVGVl1xd5w85yo2oPH6~91Eom1F2qJtGhX-M-UIXzBCMKfKCkWPLYnZBXdTel1pde18-cVlin2~yO-oAzyxlW6jxC93Fb1KxuUWEeCNZYwpKSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
						alt: 'ballon',
					},
				],
			},
		},
	],
};

export default products;
