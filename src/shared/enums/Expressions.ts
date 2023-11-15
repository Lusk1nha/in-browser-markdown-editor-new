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

enum LargeExpressions {
  BulletList = "-",
  NumberedList = "NaN",
  CodeBlock = "```"
}

enum TextExpressions {
  Link = "[]()",
  Code = "``",
}

export { StartExpressions, LargeExpressions, TextExpressions };
