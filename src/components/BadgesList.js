import React from 'react'
import { Link } from 'react-router-dom'

function useSearchBadges(badges) {


    const [query, setQuery] = React.useState('')
    const [filteredBadges, setFilteredBadges] = React.useState(badges)

    React.useMemo(
        () => {
            const result = badges.filter(badge => {
                return `${badge.firstName} ${badge.lastName}`
                    .toLowerCase()
                    .includes(query.toLowerCase())
            })


            setFilteredBadges(result)
        }, [badges, query])

    return { query, setQuery, filteredBadges }

}

// class BadgesList extends React.Component {
function BadgesList(props) {

    // render() {
    const badges = props.badges
    const { query, setQuery, filteredBadges } = useSearchBadges(badges)

    if (filteredBadges.length === 0) {
        return (
            <div>

                <div className="form-group">
                    <label>Filter Badges</label>
                    <input
                        type="text"
                        className="form-control"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>

                <h3>No badges were found</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Create new badge
                    </Link>
            </div>
        )
    }

    return (

        <div className="BadgesList">

            <div className="form-group">
                <label>Filter Badges</label>
                <input
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                    }}
                />
            </div>

            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {

                    return (
                        <li key={badge.id} >

                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                <div className="container li-container">
                                    <div className="row">
                                        <div className="col-3 col-lg-2 col-md-2 ">
                                            <img className="li-imag" src={badge.avatarUrl} />
                                        </div>
                                        <div className="col-9 col-lg-10 col-md-10 ">
                                            <div className="container">
                                                <div className="row li-row li-name">
                                                    <p>{badge.firstName} {badge.lastName}</p>
                                                </div>
                                                <div className="row li-row li-twitter">
                                                    <p>@{badge.twitter}</p>
                                                </div>
                                                <div className="row li-row">
                                                    <p>{badge.jobTitle}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </div>)

    //}
}

export default BadgesList;