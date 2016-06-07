all:
	find . -name '*.bak' -delete
	jekyll build
	cp -r _site/tag .
	git add _site _posts tag
