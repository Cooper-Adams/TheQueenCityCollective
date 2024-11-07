import Footer from '../components/Footer'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import Scroller from '../components/Scroller'
import SideArticles from '../components/SideArticles'
import '../styles/Articles.css'

const Articles = () => {
    const [teamName, setTeamName] = useState('default')
    const { name } = useParams()

    const {isPending, error, data} = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetch(`/.netlify/functions/getArticles`).then((res) => res.json())
    })

    //Redirect on query error?

    return (
        <>
            <Header team={teamName}/>

            {isPending &&
                <h2>Placeholder</h2>
            }

            {!isPending && <>
                <Scroller articles={data.body}/>

                <SideArticles articles={data.body}/>
            </>}

            <Footer team={teamName}/>
        </>
    )
}

export default Articles