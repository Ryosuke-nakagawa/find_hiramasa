require "test_helper"

class PlayControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get play_home_url
    assert_response :success
  end

  test "should get level1" do
    get play_level1_url
    assert_response :success
  end
end
