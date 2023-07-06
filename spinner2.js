const animation = "|/-\\|/-\\|"

let count = 100
for(let char of animation){

  setTimeout(() => {
    process.stdout.write(char)
    process.stdout.write('\r')}, count)
  count+=200
}
