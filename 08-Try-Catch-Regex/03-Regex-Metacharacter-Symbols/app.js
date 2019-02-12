let re

// Literal Chatacteres
re = /hello/
re = /hello/i

// Metacharacter Symbols
re = /^h/i // ^ Must start with
re = /d$/ // $ Must ends witch
re = /^hello$/i // Must begin and end with
re = /h.llo/i // Matches any ONE character
re = /h*llo/i // Matches any character 0 or more times
re = /gre?a?y/i // Optional character
re = /gre?a?y\?/i // Esacape character

// Brackets [] - Character Sets
re = /gr[ae]y/i // Must be an a or e
re = /[GF]ray/i // Must be an G or F
re = /[^GF]ray/i // Match anything except a G or F
re = /[A-Z]ray/ // Match any uppercase letter between A a Z
re = /[a-z]ray/ // Match any lowercase letter between a a z
re = /[A-Za-z]ray/ // Match any letter
re = /[0-9][0-9]ray/ // match any digit

// Braces {} Quantifiers
re = /Hel{2}o/i // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i // Must occur between {m,n} amount of times
re = /Hel{2,}o/i // Must occur at least {m,} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/ // Word Character - alphanumeric or _
re = /\w+/ // + = one or more
re = /\W/ // Non-Word character
re = /\d/ // Match any digit
re = /\d+/ // Match any digit 0 or more times
re = /\D/ // Match any Non-Digit
re = /\s/ // Match whitespace char
re = /\S/ // Match nom-whitespace
re = /Hell\b/i // Word boundary

// Assertions
re = /x(?=y)/ // Match x only if followed by y
re = /x(?!y)/ // Match x only if NOT followed by y

const str = 'ffxyff'
const result = re.exec(str)
console.log(result)

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matched ${re.source}`)
    } else {
        console.log(`${str} does NOT matched ${re.source}`)
    }
}

reTest(re, str)