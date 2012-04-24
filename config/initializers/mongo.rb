# load YAML and connect
database_yaml = YAML::load(File.read(Rails.root.to_s + '/config/database.yml'))
if database_yaml[Rails.env] && database_yaml[Rails.env]['adapter'] == 'mongodb'
  mongo = database_yaml[Rails.env]
  MongoMapper.connection = Mongo::Connection.new(mongo['host'], 
                                                 mongo['port'], 
                                                 :pool_size => mongo['pool'], 
                                                 :timeout => mongo['timeout'])
  MongoMapper.database =  mongo['database']
end

if defined?(PhusionPassenger)
   PhusionPassenger.on_event(:starting_worker_process) do |forked|
     MongoMapper.connection.connect_to_master if forked
   end
end

# Photo.ensure_index(:photo_id)

# MongoMapper.connection = Mongo::Connection.new('localhost', 27017)
# MongoMapper.database = "binzr-#{Rails.env}"
# 
# if defined?(PhusionPassenger)
#    PhusionPassenger.on_event(:starting_worker_process) do |forked|
#      MongoMapper.connection.connect if forked
#    end
# end