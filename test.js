var x = 1;

exports.foo = function() {
    return "// abc";
};

// codegen:start {preset: custom, export: foo}
// abc
// codegen:end
