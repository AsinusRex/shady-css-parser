/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * A set of common RegExp matchers for tokenizing CSS.
 * @constant
 * @type {object}
 * @default
 */
const matcher = {
  whitespace: /\s/,
  whitespaceGreedy: /(\s+)/g,
  commentGreedy: /(\*\/)/g,
  boundary: /[\(\)\{\}'"@;:\s]/,
  stringBoundary: /['"]/
};

/**
 * An enumeration of Node types.
 * @constant
 */
export enum nodeType {
  stylesheet= 'stylesheet',
  comment= 'comment',
  atRule= 'atRule',
  ruleset= 'ruleset',
  expression= 'expression',
  declaration= 'declaration',
  rulelist= 'rulelist',
  discarded= 'discarded'
};

export type Node = Stylesheet | AtRule | Comment | Rulelist | Ruleset | Expression | Declaration | Discarded;
export type Rule = Ruleset | Declaration | AtRule | Discarded | Comment;

/** A Stylesheet node. */
export interface Stylesheet {
  type: nodeType.stylesheet,

  /**
   * The list of rules that appear at the top level of the stylesheet.
   */
  rules: Rule[]
}

export interface AtRule {
  type: nodeType.atRule;
  /** The "name" of the At Rule (e.g., `charset`) */
  name: string;
  /** The "parameters" of the At Rule (e.g., `utf8`) */
  parameters: string;
  /** The Rulelist node (if any) of the At Rule. */
  rulelist: Rulelist|undefined;
}

/**
 * A Comment node.
 */
export interface Comment {
  type: nodeType.comment;
  /**
   * The full text content of the comment, including opening and closing
   * comment signature.
   */
  value: string;
}

/**
 * A Rulelist node.
 */
export interface Rulelist {
  type: nodeType.rulelist;

  /** An array of the Rule nodes found within the Ruleset. */
  rules: Rule[];
}

/**
 * A Ruleset node.
 */
export interface Ruleset {
  type: nodeType.ruleset;

  /** The selector that corresponds to the Ruleset (e.g., `#foo > .bar`). */
  selector: string;

  /** The Rulelist node that corresponds to the Selector. */
  rulelist: Rulelist;

}

/**
 * A Declaration node.
 */
export interface Declaration {
  type: nodeType.declaration

  /** The property name of the Declaration (e.g., `color`). */
  name: string;

  /**
   * Either an Expression node, or a Rulelist node, that
   * corresponds to the value of the Declaration.
   */
  value:  Expression | Rulelist | undefined;
}

/**
 * An Expression node.
 */
export interface Expression {
  type: nodeType.expression;

  /** The full text content of the expression (e.g., `url(img.jpg)`) */
  text: string;
}

/**
 * A Discarded node. Discarded nodes contain content that was not
 * parseable (usually due to typos, or otherwise unrecognized syntax).
 */

export interface Discarded {
  type: nodeType.discarded;

  /** The text content that is discarded. */
  text: string;
}

export { matcher };
