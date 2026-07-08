import Weather from "./Weather.jsx";
import UserStatus from "./UserStatus.jsx";
import Greeting from "./Greeting.jsx";

const ConditionalRenderingComponentsContainer = () => {
    return (
        <div>
            <h1>Conditional Rendering in React</h1>

            {/* Weather component */}
            <Weather temperature={10} />
            <Weather temperature={20} />
            <Weather temperature={30} />

            {/* UserStatus component */}
            <UserStatus loggedIn={true} />
            <UserStatus loggedIn={true} isAdmin={true} />
            <UserStatus loggedIn={false} />

            {/* Greeting component */}
            <Greeting timeOfDay="morning" />
            <Greeting timeOfDay="afternoon" />
            <Greeting />
        </div>
    )
};
export  default ConditionalRenderingComponentsContainer;