#!/bin/bash

for i in {0..7}; do
    fg=$(tput setaf $i)
    bg=$(tput setab $i)
    bold=$(tput bold)
    r=$(tput sgr0)
    echo "${fg}The quick brown fox ${bold}jumps${r}${bg} over the lazy dog ${r}"
done
