import Footer from "@/components/layout/Footer"
import HeaderHorizontal from "@/components/layout/HeaderHorizontal"
import React, { ReactNode } from "react"


export default function DefaultTheme({ children }: { children: ReactNode }) {

	return (
		<>
			<HeaderHorizontal />
			<section>
				{ children }
			</section>
			<Footer />
		</>
	)

}