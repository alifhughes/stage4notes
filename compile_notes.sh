#!/bin/bash

NOTES_DIR=/Users/user/Documents/STAGE4
echo "yo"
set -e

usage() {
cat << EOF
USAGE:

    notes [module|"all"]

EXAMPLES:

    notes AINT351
        Compiles notes for the module AINT351

    notes all
        compiles all notes for the year

EOF
}

getnotes() {
   ack -n "> Date: " . | \
   while read line; do
      course=$(echo "$line" | sed 's/\([^ ]*\) .*/\1/')
      file=$(echo "$line" | sed 's/\([^:]*\):2:>.*$/\1/')
      date=$(echo "$line" | sed 's/[^:]*:2:> Date: \(.*$\)/\1/')
      echo "$course$date $file"
   done | \
   sort -n | \
   while read line; do
      file=$(echo "$line" | sed 's/[^ ]* \(.*\)/\1/')
      echo "$file"
   done
   unset course file date
}

makepdf() {
      pandoc --latex-engine=lualatex -H $NOTES_DIR/fonts.tex --toc \
         -o "${1}.pdf" $2 &&
      echo "Created ${1}.pdf"
}

makehtml() {
      pandoc -w slidy -H $NOTES_DIR/slidy.html -s $2 | \
         sed -e 's/<h[2-9]/<\/div><div class=\"slide\">&/' \
         -e 's/slidy.js.gz/slidy.js/' > "${1}.html" &&
         echo "Created ${1}.html"
}

makenotes() {

    # Foreach module in the notes directory
    for module in $NOTES_DIR/$1; do

        # CD into the module
        cd "$module"

        # Call get notes
        notes=$(getnotes)

        # Create the output file name
        output_file="$module/"$(basename "$module")

        oldifs=$IFS
        IFS=$'\n'

        # Make the pdf of the filename and the notes
        makepdf "$output_file" "$notes"

        # Make the html of the filename and the notes
        #makehtml "$output_file" "$notes"

        IFS=$oldifs

        # Release the variables
        unset notes output_file oldifs

        echo "Compiling ${module}.pdf..."
        gs -sDEVICE=pdfwrite \
         -dQUIET \
         -o "$(basename $module).pdf" &&
         echo "Created ${module}.pdf"

    done
}

main() {
    echo "Compiling $1..." && makenotes $1; exit 1;
}

main "$1"
