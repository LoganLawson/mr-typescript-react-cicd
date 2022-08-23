const Fib = (input: number) => {
    let xn_minus2 = 0
    let xn_minus1 = 1
    let xn = 0
    let xn_plus1

    for (let i = 0; i < input; i++) {

        xn_plus1 = xn_minus1 + xn_minus2
        xn_minus2 = xn_minus1
        xn = xn_minus1
        xn_minus1 = xn_plus1

    }
    return xn
}

export default Fib