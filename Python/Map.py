import pandas as pd
import folium

import json
import pandas as pd
import folium


def create_map_from_csv(csv_file, output_file):
    df = pd.read_csv(csv_file)
    mymap = folium.Map(location=[49.841909, 24.031569], zoom_start=16)

    for index, row in df.iterrows():
        coordinates = row['Coordinates'].replace("'",
                                                 '"')  # замінюємо одинарні лапки на подвійні для коректного формату JSON
        coordinates_dict = json.loads(coordinates)  # перетворюємо рядок у словник
        lat, lng = coordinates_dict['lat'], coordinates_dict['lng']
        folium.Marker([lat, lng], popup=row['Name']).add_to(mymap)

    mymap.save(output_file)

create_map_from_csv('../Data/Restaurants.csv', 'map.html')
