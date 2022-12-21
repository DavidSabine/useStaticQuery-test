import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

const Title = () => {
	const data = useStaticQuery(graphql`
	query {
		site {
			port
		}
	}
`)

return (
	<>
		<h1>problem.js</h1>
		<p>Port number via useStaticQuery: {data.site.port}</p>
		<p>This works if the file extension of this component is .js</p>
		<p>This breaks if this file extension is changed to .mjs</p>
	</>
)
}

export default Title