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
  CodeBlock = "```",
}

enum InternalExpressions {
  Link = "[]()",
  Code = "`",
}

export { StartExpressions, LargeExpressions, InternalExpressions };
