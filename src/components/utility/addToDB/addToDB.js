import toast from 'react-hot-toast';

const getStoredApps = () => {
    const storedAppsSTR = localStorage.getItem('app-item');

    if (storedAppsSTR) {
        return JSON.parse(storedAppsSTR);
    } else {
        return [];
    }
};

const addToDB = (id) => {
    const storedAppsData = getStoredApps();

    if (storedAppsData.includes(id)) {
        toast.error('Your app is already installed');
    } else {
        storedAppsData.push(id);

        localStorage.setItem('app-item', JSON.stringify(storedAppsData));

        toast.success('Your app is installed');
    }
};

export { addToDB };