namespace :db do
  desc "Erase and fill"
  task :populate => :environment do

    [Photo].each(&:delete_all)
    #chm_photos = [
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Computer_History_Museum%2C_Mountain_View%2C_CA.JPG/800px-Computer_History_Museum%2C_Mountain_View%2C_CA.JPG',
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Computer_History_Museum_Lobby.JPG/800px-Computer_History_Museum_Lobby.JPG',
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Sage_Computer_in_Revolution_exhibition_at_the_Computer_History_Museum.JPG/800px-Sage_Computer_in_Revolution_exhibition_at_the_Computer_History_Museum.JPG'
    #]
    chm_photos = [
      'https://www.filepicker.io/api/file/hb0XtjnESWeN2164nCHp',
      'https://www.filepicker.io/api/file/GmhBrRz9TEOr7WFVKcap',
      'https://www.filepicker.io/api/file/ThzVFkvXQQ2Drhr1bnbH'
    ]
    chm_photos.each do |p| 
      Photo.create(:url => p, :key => 'chm')
    end

    #ms_photos = [
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/8/84/2008_05_01_8.jpg/800px-2008_05_01_8.jpg',
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/3/38/2009-0723-CA-MtnViewAdobe.jpg/800px-2009-0723-CA-MtnViewAdobe.jpg',
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Mountainviewcentennialplaza.jpg/800px-Mountainviewcentennialplaza.jpg',
      #'http://upload.wikimedia.org/wikipedia/commons/9/9b/Wfm_mountain_view.jpg',
      #'http://upload.wikimedia.org/wikipedia/commons/4/4e/Computer_history_museum.jpg',
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Shoreline_Amphitheatre.jpg/800px-Shoreline_Amphitheatre.jpg',
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Intuitheadquarters.jpg/800px-Intuitheadquarters.jpg',
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/VTA_Tasman_Station_%28August_11th%2C_2005%29.jpg/800px-VTA_Tasman_Station_%28August_11th%2C_2005%29.jpg'
    #]
    ms_photos = [
      'https://www.filepicker.io/api/file/h2SeIVFnTgu7UvFnU5h1',
      'https://www.filepicker.io/api/file/H8c3Y2u1SdOCdPZju8EW',
      'https://www.filepicker.io/api/file/2pgbBNgORAaJPT170pnV',
      'https://www.filepicker.io/api/file/WsJSNLvATYSfnj5g5WGE',
      'https://www.filepicker.io/api/file/a84ZHJmQQoG3em6Gs5BR',
      'https://www.filepicker.io/api/file/UTmygypLRG295RpFGMOd'
    ]
    ms_photos.each do |p| 
      Photo.create(:url => p, :key => 'ms')
    end

    #cmu_photos = [
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/1/13/CMU_Hamerschlag_Hall.jpg/800px-CMU_Hamerschlag_Hall.jpg',
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Wean_hall.jpg/800px-Wean_hall.jpg',
      #'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/School_of_design.jpg/800px-School_of_design.jpg'
    #]
    cmu_photos = [
      'https://www.filepicker.io/api/file/C9YVG2PgTP214uOyizKI',
      'https://www.filepicker.io/api/file/Bed5lRVRZaGqaxoswrCA',
      'https://www.filepicker.io/api/file/u7M9NLSPTOWY7bHQuoQb',
      'https://www.filepicker.io/api/file/qWTroyQJRYiufcaeayMH',
      'https://www.filepicker.io/api/file/69vT1HyYRKOweXq77OF1',
      'https://www.filepicker.io/api/file/R1xigTzrXBLw0BKAgkt4',
      'https://www.filepicker.io/api/file/0giVB5I1TCOUIgLcVNiY',
      'https://www.filepicker.io/api/file/IbH2vaqkRy2EPikPXVXO',
      'https://www.filepicker.io/api/file/q7WtlYNQ3GYR8zViCGgg',
      'https://www.filepicker.io/api/file/fJtD2CEgQqxlkpjNffs0',
      'https://www.filepicker.io/api/file/yYyHQXGoTSjxFI3z7KiS',
      'https://www.filepicker.io/api/file/sYb6KBWRUijjBO4zcflH'
    ]
    cmu_photos.each do |p| 
      Photo.create(:url => p, :key => 'cmu')
    end

    google_photos = [
      'https://www.filepicker.io/api/file/IGIGfmsASjW0kXorzXz9',
      'https://www.filepicker.io/api/file/r0pFdkwQeat5lD0iDG08',
      'https://www.filepicker.io/api/file/aYnJpwduRX6Va0AGP8KX',
      'https://www.filepicker.io/api/file/Bivz4nJQzWdgjypJJs7H',
      'https://www.filepicker.io/api/file/jzC0PBQWTzCsATsGVqa3'
    ]
    google_photos.each do |p| 
      Photo.create(:url => p, :key => 'google')
    end

  end
end
