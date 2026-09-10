# Makefile to build CV PDFs (English and Vietnamese)
# Targets:
#   make         -> builds both en and vi
#   make en      -> build English PDF (pdflatex)
#   make vi      -> build Vietnamese PDF (XeLaTeX)
#   make clean   -> remove build artifacts

SRC=cv-llt.tex
EN_PDF=cv-llt-en.pdf
VI_PDF=cv-llt-vi.pdf
VI_XE_SRC=cv-llt-vi-xelatex.tex

.PHONY: all en vi clean
all: en vi

en:
	@echo "Building English PDF (pdflatex)"
	pdflatex -interaction=nonstopmode -halt-on-error $(SRC) || true
	pdflatex -interaction=nonstopmode -halt-on-error $(SRC) || true
	cp cv-llt.pdf $(EN_PDF) || true
	@echo "English PDF: $(EN_PDF)"

vi:
	@echo "Building Vietnamese PDF (XeLaTeX)"
	# Create a XeLaTeX-friendly source: replace inputenc/fontenc/babel[english] with fontspec + TeX Gyre Termes + babel[vietnamese]
	perl -0777 -pe "s/\\usepackage\[utf8\]\{inputenc\}\\n\\usepackage\[T1\]\{fontenc\}\\n\\usepackage\[english\]\{babel\}/\\usepackage{fontspec}\\n\\setmainfont{TeX Gyre Termes}\\n\\usepackage[vietnamese]{babel}/s" $(SRC) > $(VI_XE_SRC)
	# Ensure language macro is set to vi in the XeLaTeX source
	perl -0777 -pe "s/\\newcommand\{\\lang\}\{en\}/\\newcommand{\\lang}{vi}/s" -i $(VI_XE_SRC)
	xelatex -interaction=nonstopmode -halt-on-error $(VI_XE_SRC) || true
	xelatex -interaction=nonstopmode -halt-on-error $(VI_XE_SRC) || true
	cp $(VI_XE_SRC:.tex=.pdf) $(VI_PDF) || true
	@echo "Vietnamese PDF: $(VI_PDF)"

clean:
	@echo "Cleaning auxiliary files"
	rm -f *.aux *.log *.out *.bcf *.blg *.bbl cv-llt.pdf $(EN_PDF) $(VI_PDF) $(VI_XE_SRC) cv-llt-vi-xelatex.pdf || true
	@echo "Clean done" 
