require_relative 'lib/saucegem/version'

Gem::Specification.new do |spec|
  spec.name        = 'saucegem'
  spec.version     = Saucegem::VERSION
  spec.authors     = ['']
  spec.email       = ['web@raspberrypi.org']
  spec.homepage    = 'https://www.raspberrypi.org'
  spec.summary     = 'Summary of saucegem.'
  spec.description = 'Description of saucegem.'
  spec.license = 'MIT'

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the "allowed_push_host"
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata['homepage_uri'] = spec.homepage
  spec.metadata['source_code_uri'] = 'https://www.raspberrypi.org'
  spec.metadata['changelog_uri'] = 'https://www.raspberrypi.org'

  spec.files = Dir.chdir(File.expand_path(__dir__)) do
    Dir['lib/**/*']
  end

  spec.add_dependency 'rails', '>= 7.0.3'
end
