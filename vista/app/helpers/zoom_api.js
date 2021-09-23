const NAME_URL="api.zoom.us",
NAME="INLINE",
DOMAIN=`https://${NAME_URL}.com/`,
API=`${DOMAIN}/v2`,
USER=`me`,
USERS=`${API}/users/${USER}`,
MEETING=`${USERS}/meetings`;
export default {
    NAME_URL,
    NAME,
    DOMAIN,
    API,
    USER,
    USERS,
    MEETING
}