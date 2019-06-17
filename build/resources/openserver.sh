i=0;
for d in */ ; do
    php -S 0.0.0.0:800$i -t $d &
    echo "$d$i"
    i=$((i+1))

done