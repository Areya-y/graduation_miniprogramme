// pages/writeWords/writeWords.js
var word_Data = require("../../data/post_data.js");
Page({
  data: {
    strangeGradeNum_write:44,
    knowGradeNum_write:4,
    familiarGradeNum_write:76,
    words_thisBook: word_Data.local_wordList_selections,
  }
})