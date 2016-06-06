all:
	find . -name '*.bak' -delete
	jekyll build
	cp -r _site/tag .

