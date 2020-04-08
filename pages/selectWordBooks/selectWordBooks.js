Page({
	data: {
	  TabCur: 0,
	  scrollLeft:0,
	  wordBook_categorys:[
		{
			id:0,
			name:"basicWords",
			value:"基础单词"
		},
		{
			id:1,
			name:"importantWords",
			value:"重要单词"
		},
		{
			id:2,
			name:"highFrequencyWords",
			value:"高频单词"
		},
		{
			id:3,
			name:"hardWords",
			value:"难点单词"
		}
	  ],
	  wordBook_names:[
		{
			id:0,
			name:"basicWords",
			value:"词汇1"
		},
		{
			id:1,
			name:"importantWords",
			value:"词汇2"
		},
		{
			id:2,
			name:"highFrequencyWords",
			value:"词汇3"
		},
		{
			id:3,
			name:"hardWords",
			value:"词汇4"
		}
	  ]
	},
	tabSelect(e) {
		// console.log(e.currentTarget.dataset.id),
		this.setData({
			TabCur: e.currentTarget.dataset.id,
			scrollLeft: (e.currentTarget.dataset.id-1)*60
		})
	}
  })