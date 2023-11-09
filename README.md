# eslint-processors-repro

Repro of eslint issue https://github.com/eslint/eslint/issues/17724

To see the problem, run `npx eslint docs`. Note that there are three errors found, when there should be four:

1. `codegen-ex.md` - this uses `eslint-plugin-codegen` which generates a markdown table-of-contents. The error warns that the generated code is outdated.
2. `markdown-ex.md` - this uses `eslint-plugin-markdown` to validate javascript blocks in the file. The error warns that there's a missing semicolon.
3. `markdown-plug-codegen-ex.md` - this file has _both_ problems, but only the problem from `eslint-plugin-markdown` is found.

The reason the `codegen` rule is missed is because `eslint-plugin-codegen` has its own processor for `.md` files, which is overridden by `eslint-plugin-markdown`'s processor. `eslint-plugin-codegen` considers all the text in the markdown file whereas `eslint-plugin-markdown` extracts the javascript snippets.

Note that the `processor` value is explicitly defined in an override in the config for `*markdown*.md` files. Removing this means that `eslint-plugin-codegen` works as expected, but `eslint-plugin-markdown` no longer finds errors.

If each plugin could define their own processor, which takes the original file on-disk as an input, they could work together.
