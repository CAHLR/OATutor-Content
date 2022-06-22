var hints = [{id: "a746c1bFactoring10a-h1", type: "hint", dependencies: [], title: "Find the common factor", text: "Is there a greatest common factor of all the terms in the expression $$27x y^3+48x y$$?", variabilization: {}}, {id: "a746c1bFactoring10a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$3x y$$"], dependencies: ["a746c1bFactoring10a-h1"], title: "Find the common factor", text: "What is the greatest common factor of $$27x y^3$$ and $$48x y$$?", variabilization: {}}, {id: "a746c1bFactoring10a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$9y^2+16$$"], dependencies: ["a746c1bFactoring10a-h2"], title: "Factor out the greatest common term", text: "(27*x*(y**3))+(48*x*y)=3*x*y*(?). What is ?", variabilization: {}}, {id: "a746c1bFactoring10a-h4", type: "hint", dependencies: ["a746c1bFactoring10a-h3"], title: "Factoring Completely", text: "There is no way to further factor $$3x y$$. Are there any ways to factor $$9y^2+16$$?", variabilization: {}}, {id: "a746c1bFactoring10a-h5", type: "hint", dependencies: ["a746c1bFactoring10a-h4"], title: "Finished Factoring", text: "We can rewrite $$9y^2+16$$ as $${\\left(3y\\right)}^2+4^2$$. Note that sum of squares is prime so it is not factorable. Therefore, we can not further factor $$9y^2+16$$.", variabilization: {}}, {id: "a746c1bFactoring10a-h6", type: "hint", dependencies: ["a746c1bFactoring10a-h5"], title: "Put together all factors", text: "Since we can not further factor $$9y^2+16$$ and $$3x y$$, $$27x y^3+48x y$$ can factor completely into $$3x y \\left(9y^2+16\\right)$$", variabilization: {}}, ]; export {hints};