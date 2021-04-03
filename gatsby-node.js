module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    consolg.log(JSON.stringify(node, undefined, 4))
}