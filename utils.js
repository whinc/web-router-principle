const extractUrlPath = url => /https?:\/\/[^/]+([^?#]*)/.exec(url)[1];
const extractHashPath = url => (/#(.*)$/g.exec(url) || ["", ""])[1];

export default {extractHashPath, extractUrlPath}