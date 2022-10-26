#!/usr/bin/env python3

#text = "import i{num} from './images/{num}.gif'"
#text = "\t\"{num}\": i{num},"
"""text = '''
	"{num}": $
		"answer": "prophase"
	~,
	'''"""
text='<img src=$i{num}~ style=$$display: "none"~~ id=$"{num}"~/>'
for num in range(0, 37):
	print(text.format(num=num).replace("$", "{").replace("~", "}"))