export const listOptions = Object.freeze({
    nowPlaying: 'now_playing',
    popular: 'popular',
    topRated: 'top_rated',
    upcoming: 'upcoming',

});

export function addFilterOptions(select) {
    // const defaultOption = document.createElement('option');
    // defaultOption.value = 'default';
    // defaultOption.textContent = 'Mostrar Todas';
    // select.appendChild(defaultOption);

    Object.entries(listOptions).forEach(([key, value]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = key;
        select.appendChild(option);
    });
}