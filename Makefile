EXTENSION_FILES = \
	manifest.json \
	background.js \
	content.js \
	options.html \
	options.js \
	icons/48.png


CONTENT_JS = $(shell find content/ -type f)

all: $(EXTENSION_FILES) extension.zip
.PHONY: all

extension.zip: $(EXTENSION_FILES)
	zip -FS $@ $^

options.html: $(CONTENT_JS) scripts/gen-options.py
	./scripts/gen-options.py > $@

content.js: $(CONTENT_JS) scripts/gen-content.py
	./scripts/gen-content.py > $@

clean:
	rm -f extension.zip
	rm -f options.html
	rm -f content.js
.PHONY: clean

format:
	prettier --write *.js *.json *.html content/*.js
.PHONY: format
