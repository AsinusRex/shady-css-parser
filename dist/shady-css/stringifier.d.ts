/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
import { AtRule, Comment, Declaration, Discarded, Expression, Node, nodeType, Rulelist, Ruleset, Stylesheet } from './common';
import { NodeVisitor } from './node-visitor';
/**
 * Class that implements basic stringification of an AST produced by the Parser.
 */
declare class Stringifier extends NodeVisitor<Node, string> {
    /**
     * Stringify an AST such as one produced by a Parser.
     * @param ast A node object representing the root of an AST.
     * @return The stringified CSS corresponding to the AST.
     */
    stringify(ast: Node): string;
    /**
     * Visit and stringify a Stylesheet node.
     * @param stylesheet A Stylesheet node.
     * @return The stringified CSS of the Stylesheet.
     */
    [nodeType.stylesheet](stylesheet: Stylesheet): string;
    /**
     * Visit and stringify an At Rule node.
     * @param atRule An At Rule node.
     * @return The stringified CSS of the At Rule.
     */
    [nodeType.atRule](atRule: AtRule): string;
    /**
     * Visit and stringify a Rulelist node.
     * @param rulelist A Rulelist node.
     * @return The stringified CSS of the Rulelist.
     */
    [nodeType.rulelist](rulelist: Rulelist): string;
    /**
     * Visit and stringify a Comment node.
     * @param comment A Comment node.
     * @return The stringified CSS of the Comment.
     */
    [nodeType.comment](comment: Comment): string;
    /**
     * Visit and stringify a Seletor node.
     * @param ruleset A Ruleset node.
     * @return The stringified CSS of the Ruleset.
     */
    [nodeType.ruleset](ruleset: Ruleset): string;
    /**
     * Visit and stringify a Declaration node.
     * @param declaration A Declaration node.
     * @return The stringified CSS of the Declaration.
     */
    [nodeType.declaration](declaration: Declaration): string;
    /**
     * Visit and stringify an Expression node.
     * @param expression An Expression node.
     * @return The stringified CSS of the Expression.
     */
    [nodeType.expression](expression: Expression): string;
    /**
     * Visit a discarded node.
     * @param _discarded A Discarded node.
     * @return An empty string, since Discarded nodes are discarded.
     */
    [nodeType.discarded](_discarded: Discarded): string;
}
export { Stringifier };
