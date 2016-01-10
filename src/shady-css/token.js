
/**
 * Class that describes individual tokens as produced by the Tokenizer.
 */
class Token {
  /**
   * Create a Token instance.
   * @param {number} type The lexical type of the Token.
   * @param {number} start The start index of the text corresponding to the
   * Token in the CSS text.
   * @param {number} offset The end index of the text corresponding to the Token
   * in the CSS text.
   */
  constructor(type, start, offset) {
    this.type = type;
    this.start = start;
    this.offset = offset;
  }

  /**
   * Test if the Token matches a given numeric type. Types match if the bitwise
   * AND of the Token's type and the argument type are equivalent to the
   * argument type.
   * @param {number} type The numeric type to test for equivalency with the
   * Token.
   */
  is(type) {
    return (this.type & type) === type;
  }
}

/**
 * An enumeration of Token types.
 * @type {object}
 * @default
 * @static
 */
Token.type = {
  whitespace: 1,
  string: 2,
  comment: 4,
  word: 8,
  boundary: 16,
  propertyBoundary: 32,
  // Special cases for boundary:
  openParenthesis: 64 | 16,
  closeParenthesis: 128 | 16,
  at: 256 | 16,
  openBrace: 512 | 16,
  // [};] are property boundaries:
  closeBrace: 1024 | 32 | 16,
  semicolon: 2048 | 32 | 16,
};

/**
 * A mapping of boundary token text to their corresponding types.
 * @type {object}
 * @default
 * @const
 */
const boundaryTokenTypes = {
  '(': Token.type.openParenthesis,
  ')': Token.type.closeParenthesis,
  ':': Token.type.colon,
  '@': Token.type.at,
  '{': Token.type.openBrace,
  '}': Token.type.closeBrace,
  ';': Token.type.semicolon,
  '-': Token.type.hyphen,
  '_': Token.type.underscore
};

export { Token, boundaryTokenTypes };