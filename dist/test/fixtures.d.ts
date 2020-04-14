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
export declare const basicRuleset = "\nbody {\n  margin: 0;\n  padding: 0px\n}\n";
export declare const atRules = "\n@import url('foo.css');\n\n@font-face {\n  font-family: foo;\n}\n\n@charset 'foo';\n";
export declare const keyframes = "\n@keyframes foo {\n  from {\n    fiz: 0%;\n  }\n\n  99.9% {\n    fiz: 100px;\n    buz: true;\n  }\n}\n";
export declare const customProperties = "\n:root {\n  --qux: vim;\n  --foo: {\n    bar: baz;\n  };\n}\n";
export declare const extraSemicolons = "\n:host {\n  margin: 0;;;\n  padding: 0;;\n  ;display: block;\n};\n";
export declare const declarationsWithNoValue = "\nfoo;\nbar 20px;\n\ndiv {\n  baz;\n}\n";
export declare const minifiedRuleset = ".foo{bar:baz}div .qux{vim:fet;}";
export declare const psuedoRuleset = ".foo:bar:not(#rif){baz:qux}";
export declare const dataUriRuleset = ".foo{bar:url(qux;gib)}";
export declare const pathologicalComments = "\n.foo {\n  bar: /*baz*/vim;\n}\n/* unclosed\n@fiz {\n  --huk: {\n    /* buz */\n    baz: lur;\n  };\n}\n@gak wiz;";
