enum StartExpressions {
  Title = "#",
  Subtitle = "##",
  BlockQuote = ">",
  LargeBoldSubTitle = "###",
  MediumBoldSubTitle = "####",
  SmallBoldSubTitle = "#####",
  HighlightBoldSubTitle = "######",
  Text = "",
  BreakLine = "\n",
}

enum TextExpressions {
  Link = "[]()",
  Code = "``",
}

export { StartExpressions, TextExpressions };
