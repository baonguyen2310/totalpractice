# Chọn language code mặc định:
Ctrl shift P Gõ open setting chọn JSON
thêm đoạn này
"files.associations": {
        "*.js": "javascriptreact",
        "*.jsx": "javascriptreact"
    }

# Formatting code svg:
shift alt f: formatting code

- Import svg react:
import {ReactComponent as YourSvg} from '../assets/images/logo/piterest.svg';
<YourSvg />

# Import image react:
1 là import
2 là dùng require để webpack xử lý được

# FontAwesome react:
npm i @fortawesome/fontawesome-svg-core
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/react-fontawesome

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
<FontAwesomeIcon icon={faMagnifyingGlass} />