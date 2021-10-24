var hints = [{id: "rational1a-h1", type: "hint", dependencies: [], title: "Factor the expression", text: "Factoring is the process to split a product into a group of factors (a multiplication of simpler expressions).", variabilization: {}}, {id: "rational1a-h2", type: "hint", dependencies: ["rational1a-h1"], title: "Factor the expression", text: "Not all terms can be factored. Factor the terms that can be split further.", variabilization: {}}, {id: "rational1a-h3", type: "hint", dependencies: ["rational1a-h2"], title: "Factor the expression", text: "In this case, we can factor $$x^2+\\left(4\\right) x-\\left(5\\right)$$ and $$\\left(3\\right) x+\\left(18\\right)$$.", variabilization: {}}, {id: "rational1a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(x+\\left(5\\right)\\right) \\left(x-\\left(1\\right)\\right)$$"], dependencies: ["rational1a-h3"], title: "Factor the expression", text: "What does $$x^2+\\left(4\\right) x-\\left(5\\right)$$ factor into?", variabilization: {}}, {id: "rational1a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3\\left(x+\\left(6\\right)\\right)$$"], dependencies: ["rational1a-h4"], title: "Factor the expression", text: "What does $$\\left(3\\right) x+\\left(18\\right)$$ factor into?", variabilization: {}}, {id: "rational1a-h6", type: "hint", dependencies: ["rational1a-h5"], title: "Cancel terms", text: "Now that you have factored all possible terms, if you see the same term in the numerator and the denominator of the product, you can cancel it out.", variabilization: {}}, {id: "rational1a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x+\\left(5\\right)$$"], dependencies: ["rational1a-h6"], title: "Cancel terms", text: "What term can we cancel out?", variabilization: {}}, {id: "rational1a-h8", type: "hint", dependencies: ["rational1a-h7"], title: "Final Answer", text: "After canceling out terms, your final answer will remain in product form. What is the answer?", variabilization: {}}, ]; export {hints};