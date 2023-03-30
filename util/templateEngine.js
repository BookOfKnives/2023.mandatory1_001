import fs from "fs";

function renderPage(page, config={}) {
    const navbarPage = fs.readFileSync("./public/components/nav/nav.html").toString()
        .replace("$TAB_TITLE", config.tabTitle || "Grind default title");
    const footerPage = fs.readFileSync("public/components/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `&copy; ${new Date().getFullYear()}`);

return navbarPage + page + footerPage;
}

function renderUnitPage(page, config={}) {
    const navbarPage = fs.readFileSync("./public/components/nav/nav.html").toString();
    const unitPage = page.replace("$TAB_TITLE", config.tabTitle || "Grind default title")
        .replace("$UNIT_DESCRIPTION", config.unitDescription || "unit description here");

    const footerPage = fs.readFileSync("public/components/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `&copy; ${new Date().getFullYear()}`); 

return navbarPage + unitPage + footerPage;
}

function renderLearningPage(page, config={}) { //TO-DO: only show one item from pagesInLearning at a time, add prev/next button
    const pagesInLearning = [];
    pagesInLearning.push(fs.readFileSync("./public/pages/learning/apilearning/apilearning.html"));
    pagesInLearning.push(fs.readFileSync("./public/pages/learning/expressjsonlearning/expressjsonlearning.html"));
    pagesInLearning.push(fs.readFileSync("./public/pages/learning/expresslearning/expresslearning.html"));

    const navbarPage = fs.readFileSync("./public/components/nav/nav.html").toString()
        .replace("$TAB_TITLE", "Learning I've Accomplished")
    const footerPage = fs.readFileSync("public/components/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `&copy; ${new Date().getFullYear()}`); 

return navbarPage + page + pagesInLearning + footerPage;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

export default {
    renderPage,
    readPage,
    renderUnitPage,
    renderLearningPage
}