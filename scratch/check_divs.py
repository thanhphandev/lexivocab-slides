import os

path = r'e:\portfolio\lexivocab-ex\lexivocab\slides.md'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

slides = content.split('\n---\n')
for i, slide in enumerate(slides):
    open_divs = slide.count('<div')
    close_divs = slide.count('</div>')
    if open_divs != close_divs:
        print(f"Slide {i+1}: Open {open_divs}, Close {close_divs}")
