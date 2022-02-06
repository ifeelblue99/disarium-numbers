num = "135"

function isDisarium(n){

  let b = 0
  for (var i = 0; i < n.length; i++) {
    b += Math.pow(n[i], i+1)
  }

  return b
}


console.log("is the number", num, "disarium?",isDisarium(num))