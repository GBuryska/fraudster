import Navbar from "../components/Navbar.jsx";
import NavCus from "../components/NavCus.jsx";
import React, {useRef, useState} from "react";


function SettingsPage() {
    const settingsForm = useRef(null)
    const [limits, setLimits] = useState()
    const [locationRestrictions, setLocationRestrictions] = useState()
    const [international, setInternational] = useState()
    const [interstate, setInterstate] = useState()
    const [intercity, setIntercity] = useState()
    const [categoryRestrictions, setCategoryRestrictions] = useState()
    const [timeRestrictions, setTimeRestrictions] = useState()

    const handleLimitsChange = (event) => {
        setLimits(event.target.checked);
    };

    const handleLocationRestrictionsChange = (event) => {
        setLocationRestrictions(event.target.checked);
        setInternational(null);
        setInterstate(null);
        setIntercity(null);
    }

    const handleInternationalChange = (event) => {
        setInternational(event.target.checked);
        setInterstate(null);
        setIntercity(null);
    }

    const handleInterstateChange = (event) => {
        setInterstate(event.target.checked);
        setIntercity(null);
    }

    const handleIntercityChange = (event) => {
        setIntercity(event.target.checked);
    }

    const handleCategoryRestrictionsChange = (event) => {
        setCategoryRestrictions(event.target.checked);
    }

    const handleTimeRestrictionsChange = (event) => {
        setTimeRestrictions(event.target.checked);
    }

    const handleSubmit = () => {

    }
    return (
        <>
            <Navbar className="navbar" />
            <NavCus selected="settings"/>
            <div className='page'>
                <h3 style={{ textAlign: 'center', margin: '0', padding: '10px'}}>Purchase Control Settings</h3>
                <form onSubmit={handleSubmit} ref={settingsForm} className='settings-form'>
                    <div className='section-settings'>
                        <div className='settings-header'>
                            <span >Spending Limits</span>
                            <input
                                type='checkbox'
                                checked={limits}
                                onChange={handleLimitsChange}
                            />
                        </div>
                        {limits &&
                            <div className='settings-set'>
                                <div className='setting'>
                                    <label>Daily: </label>
                                    <input
                                        type="number"
                                        name="daily_limit"
                                        step="0.01"
                                    />
                                </div>
                                <div className='setting'>
                                    <label>Weekly: </label>
                                    <input
                                        type="number"
                                        name="weekly_limit"
                                        step="0.01"
                                    />
                                </div>
                                <div className='setting'>
                                    <label>Monthly: </label>
                                    <input
                                        type="number"
                                        name="monthly_limit"
                                        step="0.01"
                                    />
                                </div>
                                <div className='setting'>
                                    <label>Per Purchase: </label>
                                    <input
                                        type="number"
                                        name="purchase_limit"
                                        step="0.01"
                                    />
                                </div>
                            </div>
                        }
                    </div>
                    <div className='section-settings'>
                        <div className='settings-header'>
                            <span >Location Restrictions</span>
                            <input
                                type='checkbox'
                                checked={locationRestrictions}
                                onChange={handleLocationRestrictionsChange}
                            />
                        </div>
                        {locationRestrictions &&
                            <div className='settings-set'>
                                <div className='setting'>
                                    <label>Block Online Purchases: </label>
                                    <input
                                        type="checkbox"
                                        name="online_purchases"
                                    />
                                </div>
                                <div className='setting'>
                                    <label>Block International Purchases: </label>
                                    <input
                                        type="checkbox"
                                        name="international_purchases"
                                        checked={international}
                                        onChange={handleInternationalChange}
                                    />
                                </div>
                                {international &&
                                    <div className='setting'>
                                        <label>Block Interstate Purchases: </label>
                                        <input
                                            type="checkbox"
                                            checked={interstate}
                                            onChange={handleInterstateChange}
                                        />
                                        {interstate &&
                                            <div className='sub-setting'>
                                                <label>Home State: </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="interstate_state"
                                                />
                                            </div>
                                        }
                                    </div>
                                }
                                {international && interstate &&
                                    <div className='setting'>
                                        <label>Block Intercity Purchases: </label>
                                        <input
                                            type="checkbox"
                                            checked={intercity}
                                            onChange={handleIntercityChange}
                                        />
                                        {intercity &&
                                            <div className='sub-setting'>
                                                <label>Home City: </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="intercity_city"
                                                />
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    <div className='section-settings'>
                        <div className='settings-header'>
                            <span >Category Restrictions</span>
                            <input
                                type='checkbox'
                                checked={categoryRestrictions}
                                onChange={handleCategoryRestrictionsChange}
                            />
                        </div>
                        {categoryRestrictions &&
                            <div className='settings-set'>
                                <div className='setting'>
                                    <input
                                        type="checkbox"
                                        name="gambling"
                                    />
                                    <label> Gambling</label>
                                </div>
                                <div className='setting'>
                                    <input
                                        type="checkbox"
                                        name="adult_entertainment"
                                    />
                                    <label> Adult Entertainment</label>
                                </div>
                                <div className='setting'>
                                    <input
                                        type="checkbox"
                                        name="liquor_stores"
                                    />
                                    <label> Liquor Stores</label>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='section-settings'>
                        <div className='settings-header'>
                            <span >Time Restrictions</span>
                            <input
                                type='checkbox'
                                checked={timeRestrictions}
                                onChange={handleTimeRestrictionsChange}
                            />
                        </div>
                        {timeRestrictions &&
                            <div className='settings-set'>
                                <div className='setting'>
                                    <label>Start Time: </label>
                                    <input
                                        required
                                        type='time'
                                        name='start_time'
                                    />
                                </div>
                                <div className='setting'>
                                    <label>End Time: </label>
                                    <input
                                        required
                                        type='time'
                                        name='end_time'
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default SettingsPage;